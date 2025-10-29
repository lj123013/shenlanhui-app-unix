<template>
    <view class="main">
        <button
            class="selectBtn"
            size="default"
            type="primary"
            @click="renderJS.createFileInputDom">
            {{title}}
        </button>
    </view>
</template>
<script>
export default {
	name: "heyuan-chooseFilePro",
	props: {
		title:{
			type: [String],
			default: "选择文件"
		}
	},
    data() {
        return {
			pathList:[],
			fileNumber:0,
		}
    },
    onLoad(res) {},
    methods: {
        // plus.io选择文件
        // 选择完文件后，拿到的是base64字符串，转成对应的数据
        parseJSONData(base64Str) {
            console.log('选择的文件base64Str', base64Str)
            let jsonStr = this.convertBase64ToUTF8(base64Str)
            if (base64Str.includes('application/json')) {
                let jsonData = JSON.parse(jsonStr)
                this.$emit('readJSONFinish', { jsonData })
            } else {
                this.$emit('readJSONFinish', { jsonStr })
            }
        },

        convertBase64ToUTF8(base64Str) {
            let base64Content = atob(base64Str.split(',')[1])
            base64Content = base64Content
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                })
                .join('')
            try {
                let jsonStr = decodeURIComponent(base64Content)
                return jsonStr
            } catch (error) {
                console.error('读取失败', error)
                uni.showToast({
                    title: '读取失败，不支持此格式文件',
                    icon: 'none'
                })
            }
        },

        async receiveRenderFile(result) {
            // #ifdef APP-PLUS
            const fileUrl = await this.base64toPath(result.filePath, result.name)
            this.fileName = fileUrl.relativePath
            this.filePath = fileUrl.localAbsolutePath
            // #endif
            // #ifdef H5
            this.fileName = result.name
            this.filePath = result.filePath
            // #endif
            console.log('选择文件的路径：' + this.filePath);
			this.pathList.push(this.filePath);
			if(this.pathList.length == this.fileNumber){
				this.$emit('selectFilePath', this.pathList);
			}
			
        },
		
		initPathList(result){
			this.fileNumber = result.fileNumber;
			this.pathList = [];
		},

        //将base64转成路径
        base64toPath(base64, attachName) {
            console.log('base64开始转化成文件')
            let _that = this
            return new Promise(function (resolve, reject) {
                const filePath = `_doc/yourFilePath/${attachName}`
                plus.io.resolveLocalFileSystemURL(
                    '_doc',
                    function (entry) {
                        entry.getDirectory(
                            'yourFilePath',
                            {
                                create: true,
                                exclusive: false
                            },
                            function (entry) {
                                entry.getFile(
                                    attachName,
                                    {
                                        create: true,
                                        exclusive: false
                                    },
                                    function (entry) {
                                        entry.createWriter(function (writer) {
                                            writer.onwrite = function (res) {
                                                console.log('base64转化文件完成')
                                                const obj = {
                                                    relativePath: filePath,
                                                    localAbsolutePath:
                                                        plus.io.convertLocalFileSystemURL(filePath)
                                                }
                                                resolve(obj)
                                            }
                                            writer.onerror = reject
                                            writer.seek(0)
                                            writer.writeAsBinary(
                                                _that.getSymbolAfterString(base64, ',')
                                            )
                                        }, reject)
                                    },
                                    reject
                                )
                            },
                            reject
                        )
                    },
                    reject
                )
            })
        },
		
        // 取某个符号后面的字符
        getSymbolAfterString(val, symbolStr) {
            if (val == undefined || val == null || val == '') {
                return ''
            }
            val = val.toString()
            const index = val.indexOf(symbolStr)
            if (index != -1) {
                val = val.substring(index + 1, val.length)
                return val
            } else {
                return val
            }
        }
    }
}
</script>
<script module="renderJS" lang="renderjs">
export default {
	data() {
		return {}
	},
	mounted() {

	},
	methods: {
		createFileInputDom(e, ownerVm) {
			let fileInput = document.createElement('input')
			fileInput.setAttribute('type', 'file')
			fileInput.setAttribute('accept', '*/*')
			fileInput.setAttribute('multiple', 'multiple')
			fileInput.click()
			fileInput.addEventListener('change', e => {
				// let file = e.target.files[0];
				// #ifdef APP-PLUS
				 // 使用 Promise.all 来等待所有文件处理完成
				const promises = [];
				//初始化路径选择数据
				ownerVm.callMethod('initPathList',{fileNumber:e.target.files.length});
				for (let i = 0; i < e.target.files.length; i++) {
				    let file1 = e.target.files[i];
				    // 处理每个文件
					let reader = new FileReader();
					reader.readAsDataURL(file1);
					reader.onload = async function(event) {
						const base64Str = event.target.result; 
						// 若需要文件的base64文本,可打开该注释
						// ownerVm.callMethod('parseJSONData', base64Str)
					
						// 如果需要得到文件的本地路径，可以通过下面方法
						let rest = await ownerVm.callMethod('receiveRenderFile', {
							name: file1.name,
							filePath: base64Str
						});
					}
				}
				
				
				// #endif
				
				// #ifdef H5
                // 如果需要得到文件的本地路径，可以通过下面方法
				// const filePath = URL.createObjectURL(file)
                // ownerVm.callMethod('receiveRenderFile', {
                // 	name: file.name,
                // 	filePath: filePath
                // })
				// #endif
			})
		}
	}
}
</script>
<style>
.main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
}

.selectBtn {
    border-radius: 10rpx;
    font-size: 32rpx;
}
</style>

# heyuan-chooseFilePro
# 该组件是从heyuan-chooseFile修改过来的,由于之前的那个组件只支持单文件的文本选择和输出base64字符串,我优化了一下修改为多选文件选择和多种文件类型支持

## 功能
1. 本地文件选择，支持图片,文本,excel,pdf,支持鸿蒙(版本5.0.0.199),安卓等

## 快速集成

1. 点击右上角的 使用 HBuilder X 导入插件 按钮直接导入项目
2. 点击 下载插件 ZIP 按钮下载插件包并解压到项目的 uni_modules 目录下

## 使用方法

1. 在需要选择文件的页面，在Vue结构中引用heyuan-chooseFilePro，并定义selectFilePath方法
2. selectFilePath方法输出的是选中的文件地址,搭配我写的方法可支持文件上传,title是按钮的文本,不写有默认值
```vue
	<view class="text-area">
		<heyuanChooseFilePro  :title="title" @selectFilePath="getFilePath"></heyuanChooseFilePro>
	</view>
</view>
```

2. 这个sb公司无法发布演示项目实例,TM的老子都把manifest.json删空了还是报有appid,这个公司是真TMsb,这个编译器也是TM烂到家的.真是受够了,在sb公司,跟狗一样
```javascript
  getFilePath(event){
	console.log(event);
	const uploadPromises = [];
	uni.showLoading({
		title: '上传中'
	});
	for (let element of event) {
		// let url = element.path;
		let promise = this.uploadFiles(element,'附件');
		uploadPromises.push(promise);
	}
	
	Promise.all(uploadPromises).then(() => {
		uni.showToast({
			title: "上传成功",
			icon: "none",
			position: 'bottom'
		});
		uni.hideLoading();
		
	}).catch((error) => {
		console.log('文件上传失败:', error);
		uni.showToast({
			title: "文件上传失败",
			icon: "error",
			position: 'bottom'
		});
		uni.hideLoading();
	});
},

//文件上传
uploadFiles(url,type){
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: "yyyy/XXXXXXXXXXXXXXX",
			formData: {
				userId: this.userId,
				type:encodeURIComponent(encodeURIComponent(type)),
			},
			name:"file",
			filePath: url,
			success: (res) => {
				let state = res.data;
				if (state == "ok") {
					resolve(res.data);
				}else{
					reject(res);
				}
			},
			fail: (e) => {
				reject(e);
			},
		});
	});
},

//文件下载
downloadFile(fileId){
	uni.downloadFile({
	      url: 'yyyy/XXXXXXXXXXXXXXXXXXXXXXXXX?fileId='+fileId,
	      success: (res) => {
	        if (res.statusCode === 200) {
	          const tempFilePath = res.tempFilePath;
	          uni.saveFile({
	            tempFilePath: tempFilePath,
	            success: (saveRes) => {
	              const savedFilePath = saveRes.savedFilePath;
	              uni.showToast({
	                title: '保存文件成功',
	                icon: 'success'
	              });
				  setTimeout(()=>{
				  	this.openFile(savedFilePath);
				  },1000);
	            },
	            fail: (saveErr) => {
				  uni.showToast({
				    title: '保存文件失败',
				    icon: 'error'
				  });
	            }
	          });
	        } else {
			  uni.showToast({
			    title: '请求失败',
			    icon: 'error'
			  });
	        }
	      },
	      fail: (err) => {
	        console.error('请求失败', err);
	        uni.showToast({
	          title: '请求失败',
	          icon: 'none'
	        });
	      }
	    });
},

//打开下载文件
openFile(filePath) {
	uni.openDocument({
	    filePath: filePath,
	    success: function (res) {
	      console.log('文件打开成功');
	    },
	    fail: function (err) {
	      console.error('文件打开失败', err);
	    }
	  });
	  
	// if (plus) {
	// 	plus.runtime.openFile(filePath, {}, (error) => {
	// 	this.errorToast('打开文件失败');
	// 	});
	// } else {
	// 	this.errorToast('打开文件失败');
	// }
  
},
```


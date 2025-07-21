import { getCurrentInstance } from "vue";

/**
 * 获取父组件实例
 *
 * 用于在子组件中获取父组件实例,以便访问父组件的属性和方法
 *
 * @example
 * ```ts
 * // 在子组件中使用
 * const parent = useParent<ParentType>();
 * // 访问父组件属性
 * console.log(parent.someProperty);
 * ```
 *
 * @template T 父组件实例的类型
 * @returns {T} 返回父组件实例
 */
export function useParent<T>(): T {
	const { proxy } = getCurrentInstance()!;
	return proxy?.$parent as T;
}

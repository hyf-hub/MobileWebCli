import { showSuccessToast } from 'vant'
export async function copyText(text: string) {
  const clipboard = navigator.clipboard;
  console.log('clipboard', clipboard)
  clipboard ? await clipboard.writeText(text) : copyByInput(text);
  showSuccessToast({
    message: '链接已复制，可去复制分享',
    overlayStyle: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: 'white'
    },
    iconSize: 40
  });
}
function copyByInput(text: string) {
  // 创建input元素
  const input = document.createElement('input');
  // 赋值 - 想要复制的内容
  input.value = text;
  // 插入到文档
  document.body.appendChild(input);
  // 隐藏
  input.style.cssText = `position:fixed;clip:rect(0 0 0 0);top:10px`;
  // 选中
  input.select();
  // 复制
  document.execCommand('copy');
  // 移除input
  document.body.removeChild(input);
}

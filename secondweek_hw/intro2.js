const re = document.getElementById('re');

        re.addEventListener('click', () => {

            const isConfirmed = window.confirm('是否確定要執行操作？');

            if (isConfirmed) {
                // 用户点击了确认按钮
                // 执行你的操作
                localStorage.clear();
                alert('localStorage中的資料已清除！');
                location.reload();
                
            } else {
                // 用户点击了取消按钮
                // 取消操作
            }

        });


// 获取用于显示数字的元素
const numberListElement = document.getElementById('numberList');
const showInputButton = document.getElementById('showInputButton');
const inputArea = document.getElementById('inputArea');
const totalLabel = document.getElementById('total');
const totalSpan = document.getElementById('totalSpan');

const inputDialog = document.getElementById('inputDialog');
const showInputDialogButton = document.getElementById('showInputDialogButton');
const cancelButton = document.getElementById('cancelButton');
const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');

showInputDialogButton.addEventListener('click', () => {
    inputDialog.showModal();

    inputDialog.addEventListener('close', () => {
        // 对话框关闭时的处理
        if (inputDialog.returnValue === 'submitted') {
            // 提交按钮被点击
            const name = itemName.value;
            const number = itemPrice.value;



        
            // 创建一个新的<div>来显示名字、数字和按钮
            const newItem = document.createElement('div');
            newItem.innerHTML = `名字: ${name}, 價格: ${number}`;
            
            // 检查是否已经存在清除按钮，如果不存在才创建
            if (!newItem.querySelector('.clear-button')) {
                const clearButton = document.createElement('button');
                clearButton.textContent = '清除';
                clearButton.className = 'clear-button'; // 添加一个类名以标识清除按钮
                clearButton.addEventListener('click', () => {
                    newItem.remove();
                    removeElementFromStorage(newItem.dataset.id);
                    // 在清除按钮被点击时，从numbers数组中删除对应的数字
                    const index = numbers.indexOf(Number(number));
                    if (index !== -1) {
                        numbers.splice(index, 1);
                        // 更新总和
                        total -= Number(number);
                        updateTotal(total);
                    }
                    // 更新显示数字的元素内容
                    updateNumberList();
                });
                newItem.appendChild(clearButton);
            }
            
            newItem.dataset.id = Date.now(); // 分配一个唯一的ID
        
            // 清空 inputArea 元素的内容
            inputArea.innerHTML = '';
        
            // 恢复已保存的元素
            restoreSavedElements();
        
            // 将新的<div>添加到页面
            inputArea.appendChild(newItem);
            saveElementToStorage(newItem.innerHTML);
            
            // 清空输入框
            itemName.value = '';
            itemPrice.value = '';
        
            // 将数字添加到numbers数组中
            numbers.push(Number(number));
        
            // 立即更新显示数字的元素内容
            updateNumberList();
            updateTotal(total);
    
            // 更新总和
            total += Number(number);
            updateTotal(total);
            location.reload();
            
            // 处理输入数据
        } else {
            // 取消按钮被点击或者通过点击对话框外部关闭对话框
        }
    });



});

cancelButton.addEventListener('click', () => {
    // 取消按钮被点击时关闭对话框
    inputDialog.close();
});

inputDialog.addEventListener('submit', () => {
    // 表单提交时关闭对话框
    inputDialog.returnValue = 'submitted';
    inputDialog.close();
});


        // 初始化全局的numbers数组和总和变量
        const numbers = [];
        
        // 恢复已保存的元素
        function restoreSavedElements() {
            const savedElements = JSON.parse(localStorage.getItem('savedElements'));
            if (savedElements && Array.isArray(savedElements)) {
                // 清空numbers数组和总和变量
                numbers.length = 0;
                let total = 0;
                savedElements.forEach(savedElement => {
                    if (inputArea) {
                        const newDiv = document.createElement('div');
                        newDiv.innerHTML = savedElement.html;
        
                        // 重新绑定旧的清除按钮的事件处理程序
                        const oldClearButton = newDiv.querySelector('.clear-button');
                        if (oldClearButton) {
                            oldClearButton.addEventListener('click', () => {
                                newDiv.remove();
                                removeElementFromStorage(savedElement.id);
                                // 在清除按钮被点击时，从numbers数组中删除对应的数字
                                const number = Number(savedElement.html.match(/價格: (-?\d+(\.\d+)?)/)[1]);
                                const index = numbers.indexOf(number);
                                if (index !== -1) {
                                    numbers.splice(index, 1);
                                    // 更新总和
                                    total -= number;
                                    updateTotal(total);
                                }
                                // 更新显示数字的元素内容
                                updateNumberList();
                            });
                        }
        
                        // 从 savedElement.html 中提取数字
                        const match = savedElement.html.match(/價格: (-?\d+(\.\d+)?)/);
                        if (match) {
                            const number = Number(match[1]);
                            numbers.push(number);
                            // 更新总和
                            total += number;
                            updateTotal(total);
                        } else {
                            console.log('未找到匹配的数字');
                        }
        
                        inputArea.appendChild(newDiv);
        
                        // 更新显示数字的元素内容
                        updateNumberList();
                    }
                });
            }
        }
        
        // 更新显示数字的元素内容
        function updateNumberList() {
            numberListElement.textContent = numbers.join(', ');
        }
        
        // 更新总和的元素内容
        function updateTotal(total) {
            totalLabel.textContent = `${total}`;
        }
        
        // 保存元素到localStorage
        function saveElementToStorage(elementHTML) {
            const savedElements = JSON.parse(localStorage.getItem('savedElements')) || [];
            const elementId = Date.now(); // 为每个元素生成一个唯一的ID
            savedElements.push({ id: elementId, html: elementHTML });
            localStorage.setItem('savedElements', JSON.stringify(savedElements));
        }
        
        // 从localStorage中移除元素
        function removeElementFromStorage(elementId) {
            const savedElements = JSON.parse(localStorage.getItem('savedElements')) || [];
            const updatedElements = savedElements.filter(element => element.id !== elementId);
            localStorage.setItem('savedElements', JSON.stringify(updatedElements));
        }
        
        // 恢复已保存的元素
        restoreSavedElements();
































































        
        showInputButton.addEventListener('click', () => {
            // 创建一个输入框、按钮和新的<div>
            const inputElement = document.createElement('input');
            inputElement.placeholder = '輸入品項';
            const inputElement2 = document.createElement('input');
            inputElement2.placeholder = '輸入價格';
            const submitButton = document.createElement('button');
            submitButton.textContent = '提交';
            const newDiv = document.createElement('div');
        
            // 提交按钮的点击事件处理程序
            submitButton.addEventListener('click', () => {
                const name = inputElement.value;
                const number = inputElement2.value;
            
                // 创建一个新的<div>来显示名字、数字和按钮
                const newItem = document.createElement('div');
                newItem.innerHTML = `名字: ${name}, 價格: ${number}`;
                
                // 检查是否已经存在清除按钮，如果不存在才创建
                if (!newItem.querySelector('.clear-button')) {
                    const clearButton = document.createElement('button');
                    clearButton.textContent = '清除';
                    clearButton.className = 'clear-button'; // 添加一个类名以标识清除按钮
                    clearButton.addEventListener('click', () => {
                        newItem.remove();
                        removeElementFromStorage(newItem.dataset.id);
                        // 在清除按钮被点击时，从numbers数组中删除对应的数字
                        const index = numbers.indexOf(Number(number));
                        if (index !== -1) {
                            numbers.splice(index, 1);
                            // 更新总和
                            total -= Number(number);
                            updateTotal(total);
                        }
                        // 更新显示数字的元素内容
                        updateNumberList();
                    });
                    newItem.appendChild(clearButton);
                }
                
                newItem.dataset.id = Date.now(); // 分配一个唯一的ID
            
                // 清空 inputArea 元素的内容
                inputArea.innerHTML = '';
            
                // 恢复已保存的元素
                restoreSavedElements();
            
                // 将新的<div>添加到页面
                inputArea.appendChild(newItem);
                saveElementToStorage(newItem.innerHTML);
                
                // 清空输入框
                inputElement.value = '';
                inputElement2.value = '';
            
                // 将数字添加到numbers数组中
                numbers.push(Number(number));
            
                // 立即更新显示数字的元素内容
                updateNumberList();
        
                // 更新总和
                total += Number(number);
                updateTotal(total);
                location.reload();
                showInputButton.style.display = "block";
            });
            
                // 将输入框、按钮和新的<div>添加到页面
                inputArea.appendChild(inputElement);
                inputArea.appendChild(inputElement2);
                inputArea.appendChild(submitButton);
                inputArea.appendChild(newDiv);

                showInputButton.style.display = "none";
            });
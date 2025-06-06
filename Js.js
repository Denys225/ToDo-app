let input = document.getElementById('input');
let ulContent = document.getElementById('ulContent');
const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
});


input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        let liContainer = document.createElement('li');
        liContainer.classList.add('li-container'); 

        const liContent = document.createElement('div');
        liContent.classList.add('liContent');

        let checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-Container');

        let label = document.createElement('label');
        label.classList.add('input-checkbox');

        let inputCheckBox = document.createElement('input');
        inputCheckBox.type = 'checkbox';
        inputCheckBox.id = 'checkbox';

        let checkmark = document.createElement('span');
        checkmark.classList.add('checkmark');

        let textDiv = document.createElement('div')
        textDiv.classList.add('task-text');

        let crossBtn = document.createElement('button');
        crossBtn.classList.add('cross-btn');

        crossBtn.addEventListener('click', function () {
            liContainer.remove();
            updateTaskCount();
        });

        label.appendChild(inputCheckBox);
        label.appendChild(checkmark);
        checkboxContainer.appendChild(label);

        liContainer.appendChild(liContent);
        liContent.appendChild(checkboxContainer);

        liContent.appendChild(crossBtn);

        textDiv.textContent = input.value;
        liContent.appendChild(textDiv);
        liContent.insertBefore(textDiv, crossBtn);

        inputCheckBox.addEventListener('change', function () {
            if (inputCheckBox.checked) {
                liContainer.classList.add('completed');
            } else {
                liContainer.classList.remove('completed');
            }
         });

        const ulFooter = document.querySelector('.content-footer');
        ulFooter.style.display = 'Block';

        function updateTaskCount() {
            const updateCount = document.querySelectorAll('.li-container').length;
            const contentFooterTask = document.getElementById('content-footer-items-num');
            contentFooterTask.textContent = updateCount;
            if (updateCount == 0) {
                ulFooter.style.display = 'none';
            }
        };

        function showAllTasks() {
            document.querySelectorAll('.li-container').forEach(el => el.style.display = 'flex');
        }

        function showActiveTasks() {
            document.querySelectorAll('.li-container').forEach(el => {
                el.style.display = el.classList.contains('completed') ? 'none' : 'flex';
            });
        }

        function showCompletedTasks() {
            document.querySelectorAll('.li-container').forEach(el => {
                el.style.display = el.classList.contains('completed') ? 'flex' : 'none';
            });
        }

        document.getElementById('all').addEventListener('click', showAllTasks);
        document.getElementById('active').addEventListener('click', showActiveTasks);
        document.getElementById('completed').addEventListener('click', showCompletedTasks);

        document.getElementById('all-mobile').addEventListener('click', showAllTasks);
        document.getElementById('active-mobile').addEventListener('click', showActiveTasks);
        document.getElementById('completed-mobile').addEventListener('click', showCompletedTasks);

        const clearСompletedBtn = document.getElementById('clearСompletedBtn');
        clearСompletedBtn.addEventListener('click', function () {
            const dellCompletedTasks = document.querySelectorAll('.ulContent .li-container.completed');
            dellCompletedTasks.forEach(removeTaskc => removeTaskc.remove());
            updateTaskCount();
        });

        ulContent.appendChild(liContainer)
        updateTaskCount();   
        input.value = '';

    }
});
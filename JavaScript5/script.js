// ========== Example 1: Change Text ==========
document.getElementById('ex1-btn').addEventListener('click', () => {
    document.getElementById('ex1-text').textContent = "Text has been changed! 🎉";
});

// ========== Example 2: Add Items ==========
document.getElementById('ex2-btn').addEventListener('click', () => {
    const val = document.getElementById('ex2-input').value.trim();
    if(val === '') return;
    const li = document.createElement('li');
    li.textContent = val;
    document.getElementById('ex2-list').appendChild(li);
    document.getElementById('ex2-input').value = '';
});

// ========== Example 3: Remove Last Item ==========
document.getElementById('ex3-btn').addEventListener('click', () => {
    const list = document.getElementById('ex2-list');
    if(list.lastChild) list.removeChild(list.lastChild);
});

// ========== Example 4: Toggle Background ==========
const ex4Box = document.getElementById('ex4-box');
ex4Box.addEventListener('click', () => {
    ex4Box.classList.toggle('highlight');
    if(ex4Box.classList.contains('highlight')) ex4Box.style.background='#ff6f61';
    else ex4Box.style.background='#ffe699';
});

// ========== Example 5: Counter ==========
let count = 0;
const ex5Count = document.getElementById('ex5-count');
document.getElementById('ex5-inc').addEventListener('click', () => { count++; ex5Count.textContent=count; });
document.getElementById('ex5-dec').addEventListener('click', () => { count--; ex5Count.textContent=count; });

// ========== Example 6: Hover Effect ==========
const ex6Box = document.getElementById('ex6-box');
ex6Box.addEventListener('mouseover', ()=>{ ex6Box.style.background='#ffb347'; });
ex6Box.addEventListener('mouseout', ()=>{ ex6Box.style.background='#ffe699'; });

// ========== Example 7: Dynamic Image ==========
const ex7Img = document.getElementById('ex7-img');
document.getElementById('ex7-btn').addEventListener('click', ()=>{
    ex7Img.src = 'https://via.placeholder.com/200/ffb347/ffffff?text=New+Image';
});

// ========== Example 8: Input Reflection ==========
const ex8Input = document.getElementById('ex8-input');
const ex8Output = document.getElementById('ex8-output');
ex8Input.addEventListener('input', ()=>{ ex8Output.textContent = ex8Input.value; });

// ========== Example 9: Create Multiple Boxes ==========
let boxCount=0;
document.getElementById('ex9-btn').addEventListener('click', ()=>{
    boxCount++;
    const box = document.createElement('div');
    box.classList.add('dynamic-box');
    box.textContent = boxCount;
    document.getElementById('ex9-container').appendChild(box);
});

// ========== Example 10: Remove All Boxes ==========
document.getElementById('ex10-btn').addEventListener('click', ()=>{
    document.getElementById('ex9-container').innerHTML='';
    boxCount=0;
});

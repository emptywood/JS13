let tokuten = [45,12,47,98,35,47,65,27,27,64,87,57];
let gokei = 0;
let ninzu = tokuten.length;
let avg; // 平均点
let max = 0; //最高点
let min = 100; //最低点

for(let i=0; i<ninzu; i++) {
	gokei += tokuten[i];
	avg = gokei / ninzu;
	if(max < tokuten[i]) max = tokuten[i];
	if(min > tokuten[i]) min = tokuten[i];
}
// データの取得
console.log(gokei);
avg = gokei / ninzu;
avg = parseInt(avg * 100) / 100;
console.log(avg);

// データの出力
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
s1.innerText = ninzu + '人';
s2.innerText = avg + '点';
s3.innerText = max + '点';
s4.innerText = min + '点';
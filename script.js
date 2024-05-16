function fibonacci(num) {
// your code here
	if(num<=1)return num;

	let dp = [0,1];
	for(let i=2; i<num; i++){
		let ans = dp[i-1]+dp[i-2];
		dp.push(ans);
	}
	return dp[num];
}

module.exports = fibonacci;

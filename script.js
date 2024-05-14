function fibonacci(num) {
// your code here
	if(n<=1)return n;

	let dp = [0,1];
	for(let i=0; i<=num; i++){
		let ans = dp[i-1]+dp[i-2];
		dp.push(ans);
	}
	return dp[num];
}

module.exports = fibonacci;

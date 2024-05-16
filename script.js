function fibonacci(num) {
// your code here
	if(num==1)return 0;
	if(num==2)return 1;

	let dp = [0,1];
	for(let i=2; i<num; i++){
		let ans = dp[i-1]+dp[i-2];
		dp.push(ans);
	}
	return dp[num-1];
}

module.exports = fibonacci;

<script>
/* Iterative Function to calculate (x^y) % p in O(log y) */
function power(x, y, p)
{
	let res = 1;	 // Initialize result

	while (y > 0)
	{
		// If y is odd, multiply x with result
		if (y & 1)
			res = res*x;

		// y must be even now
		y = y>>1; // y = y/2
		x = x*x; // Change x to x^2
	}
	return res % p;
}

// Driver Code
let x = 2;
let y = 5;
let p = 13;
document.write("Power is " + power(x, y, p));

// This code is contributed by _saurabh_jaiswal
</script>

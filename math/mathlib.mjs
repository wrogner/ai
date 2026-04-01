// Math library
// inspired by https://math4devs.com/
// https://math4devs.com/JavaScript/Matrix.js


function div(a, b) {
    return a / b
}

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function sqrt(a) {
    return Math.sqrt(a)
}

function nroot(a, n) {
    return Math.pow(a, 1/n)
}

function pow(a, b) {
    return a ** b
}

function percent(a, b) {
    return a * b / 100
}

function abs(a) {
    return Math.abs(a)
}

function lt (a, b) {
    return a < b
}

function lte (a, b) {
    return a <= b
}

function gt (a, b) {
    return a > b
}

function gte (a, b) {
    return a >= b
}

function eq (a, b) {
    return a == b
}

function neq (a, b) {
    return a != b
}

function ident(a, b) {
    return a === b
}

function prop(a, b, x, y) {
    return a / b == x / y
}

function invprop(a, b, x, y) {
    return a / b == y / x
}

function sum(a, l, u) {
    let sum = 0
    for (let i = l; i <= u; i++) {
        sum += a[i]
    }
    return sum
}

function prod(a, l, u) {
    let prod = 1
    for (let i = l; i <= u; i++) {
        prod *= a[i]
    }
    return prod
}

// TODO: check
function integral(f, a, b, n) {
    let dx = (b - a) / n
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += f(a + i * dx)
    }
    return dx * sum
}

function derivative(f, x, dx) {
    return (f(x + dx) - f(x)) / dx
}

function limit(f, x, dx) {
    return f(x + dx)
}

function factorial(n) {
    if (n == 0) {
        return 1
    }
    return n * factorial(n - 1)
}

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// greatest common divisor
function gcd(a, b) {
    if (b == 0) {
        return a
    }
    return gcd(b, a % b)
}

// least common multiple
function lcm(a, b) {
    return a * b / gcd(a, b)
}

function isprime(n) {
    if (n <= 1) {
        return false
    }
    for (let i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

function primefactors(n) {
    let factors = []
    for (let i = 2; i <= n; i++) {
        while (n % i == 0) {
            factors.push(i)
            n /= i
        }
    }
    return factors
}

function factors(n) {
    let factors = []
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i)
        }
    }
    return factors
}

function iseven(n) {
    return n % 2 == 0
}

function isodd(n) {
    return n % 2 != 0
}

function isint(n) {
    return n % 1 == 0
}

function isfloat(n) {
    return n % 1 != 0
}

// Probability

function mean(x) {
    return Math.mean(x)
}

function odds(p) {
    return p / (1 - p)
}

function log_odds(p) {
    return Math.log(odds(p))
}

function sigma(p) {
    return Math.sqrt(p * (1 - p))
}

function variance(p) {
    return sigma(p) ** 2
}

function stddev(p) {
    return sigma(p)
}

// Scaler
function linear_scaler(x, min, max) {
    // when to use:
    // - bounds don't change
    // - few outliers, not too extreme
    // - uniform distribution
    return (x - min) / (max - min)
}

function z_score(x, mu, stddev) {
    // when to use:
    // - works on normal or lightly skewed distributions
    return (x - mu) / stddev
}

function standard_scaler(x, mu, stddev) {
    // same as z_score
    return z_score(x, mu, stddev)
}

function log_scaler(x) {
    // when to use:
    // - right skewed or power law distribution
    return Math.log(x)
}

function clip_scaler(x, min, max) {
    // x > max -> max
    // x < min -> min
    return Math.max(min, Math.min(x, max))
}

// Activation functions
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x))
}

function tanh(x) {
    return Math.tanh(x)
}

function relu(x) {
    return Math.max(0, x)
}
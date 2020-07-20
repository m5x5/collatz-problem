let chart;

/**
 * The amount of steps it takes to reach 1.
 * @param {number} num The number to check
 */
function collatzProblemSteps(num) {
    let steps = 0;
    if (num === 0) throw new Error('One is not a valid number for this function')
    while (num !== 1) {
        console.log((num !== 1))
        if ((num % 2) === 0) {
            num /= 2;
        } else {
            num = (num * 3) + 1
        }
        steps++;
    }
    return steps;
}

onload = () => {
    const ctx = document.querySelector('canvas');
    ctx.style.height = innerHeight;
    ctx.style.width = innerWidth;
    const data = [];
    const labels = [];
    for (let i = 0; i < 1000; i++) {
        labels[i] = `${i + 1}`
        data[i] = collatzProblemSteps(i + 1)
    }

    chart = new Chart(ctx, {
        type: 'line',
        options: {
            elements: {
                point: {
                    radius: 0,
                }
            }
        },
        data: {
            labels,
            datasets: [{
                borderWidth: 0,
                label: 'Steps',
                data
            }]
        }
    });
};
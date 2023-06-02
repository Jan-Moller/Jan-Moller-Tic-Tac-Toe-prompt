let fields = [
    null,
    'circle',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]

function init() {
    render();
}

function render() {
    let tableHtml = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';

        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let cellHtml = '<td>';

            if (fields[index] === 'circle') {
                cellHtml += 'o';
            } else if (fields[index] === 'cross') {
                cellHtml += 'x';
            }

            cellHtml += '</td>';
            tableHtml += cellHtml;
        }

        tableHtml += '</tr>';
    }

    tableHtml += '</table>';

    document.getElementById('content').innerHTML = tableHtml;
}
const btn = document.getElementById('downloads')

btn.onclick = function() {
    alert('Download Started')
}

const tryBtn = document.getElementById('try-now');
tryBtn.onclick = function() {
    let txt;
    if (confirm('You are about to buy music')) {
        txt = 'You have bought a subscription';
    } else {
        txt = 'Card declined';
    }
    document.getElementById("demo").innerHTML = txt;
}
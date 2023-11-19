// script.js
document.getElementById('reasonButton').addEventListener('click', function() {
    var reasons = [
        'Ее улыбка', 'Чувство юмора', 'Искренность', // и так далее до 100
    ];
    var randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById('reason').innerText = randomReason;
});
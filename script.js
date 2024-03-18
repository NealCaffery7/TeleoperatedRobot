document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const finishButton = document.getElementById('finishButton');
    let gameStarted = false;
    let buttonClickLog = [];

    document.querySelectorAll('.game-btn').forEach(btn => {
        btn.addEventListener('click', event => {
            if (!gameStarted && event.target.id !== 'startButton') {
                alert('To connect with the robot, please click START :)');
            } else {
                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                buttonClickLog.push({ button: event.target.textContent, time: currentTime });
            }
        });
    });

    startButton.addEventListener('click', () => {
        gameStarted = true;
    });

    finishButton.addEventListener('click', () => {
        if (gameStarted) {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            // buttonClickLog.push({ button: 'Finish', time: currentTime });
            showLogAndDownload(buttonClickLog);
            gameStarted = false;
        } else {
            alert('To connect with the robot, please click START:)');
        }
    });

    function showLogAndDownload(log) {
        let logText = log.map(entry => `${entry.button} -- ${entry.time}`).join('\n');
        alert(logText);
        let blob = new Blob([logText], { type: 'text/plain' });
        let link = document.createElement('a');
        link.download = 'Teleoperation_Record.txt';
        link.href = window.URL.createObjectURL(blob);
        link.click();
        gameStarted = false;
        buttonClickLog = []
    }


    //Robot API
    document.getElementById('b1').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=let us start';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b2').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Do not forget your roles and goals';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b9').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=It might be a good idea to take a look at the hints on the collaboration script';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b10').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Do not forget that we have scripts to reference';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });




});

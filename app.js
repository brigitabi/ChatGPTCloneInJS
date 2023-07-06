const API_KEY = ''
const submitButton = document.querySelector('#submit')

async function getMessage() { 
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }, 
        body : {
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hello!"}]
          }          
    }
    try { 
        await fetch('https://api.openai.com/v1/chat/completions', options)
    } catch { 

    }
}

submitButton.addEventListener('click', getMessage)
/*async function createPostHandler(event) {
    event.preventDefault();
    console.log(event.target[1].files[0]);
    console.log(event);
    const caption= event.target[0].value
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        files:event.target[1].files[0],
        body: JSON.stringify({
            caption
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', createPostHandler);*/
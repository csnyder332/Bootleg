async function newFormHandler(event) {
    event.preventDefault();
    const file = event.target[1].files[0]
    const caption=document.querySelector('input[name="caption"]').value.trim();
    const formData = new FormData()
    //formData.append("image_input",file)
    formData.append("caption",caption)
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        //document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
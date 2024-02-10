import React from 'react';

export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Handle response if necessary
    // const data = await response.json()
    // ...
  }

  return (
    <Layout>
    </Layout>

  )
}
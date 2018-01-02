<template>
  <form name="contact-form" netlify netlify-honeypot="bot-field">
    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>

    <div class="field">
      <label class="label" for="name">What's your name?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Morpheus" name="name">
      </div>
    </div>

    <div class="field">
      <label class="label" for="email">What's a good email to reach you?</label>
      <div class="control">
        <input class="input" type="text" placeholder="morpheus@matrix.io" name="email">
      </div>
    </div>

    <div class="field">
      <label class="label" for="description">What can I do for you? </label>
      <div class="control">
        <textarea name="comment" class="textarea" placeholder="Help me save Neo and Trinity."></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'contact-form'
  }
</script>

<template>
  <form name="contact-form"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/">
    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>

    <div class="field">
      <label class="label" for="name">What's your name?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Samwise Gamgee" name="name">
      </div>
    </div>

    <div class="field">
      <label class="label" for="email">What's a good email to reach you?</label>
      <div class="control">
        <input class="input" type="text" placeholder="sammy@theshire.io" name="email">
      </div>
    </div>

    <div class="field">
      <label class="label" for="description">What can I do for you? </label>
      <div class="control">
        <textarea name="comment" class="textarea" placeholder="I need help designing a strategy for taking the ring to Mordor. Some bread would be nice."></textarea>
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

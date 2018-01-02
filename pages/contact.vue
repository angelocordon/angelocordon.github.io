<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths-desktop is-half-widescreen">
        <h1 class="title is-1 is-spaced">Let's connect!</h1>
        <p class="content">
          Feel free to use the form or you send me a `hello` directly via email at angelocordon [at] gmail [dot] com.
        </p>
        <p class="content">
          Elsewhere: <a href="https://www.dribbble.com/angelocordon">Dribbble</a> | <a href="https://www.github.com/angelocordon">GitHub</a> | <a href="https://www.medium.com/@angelocordon">Medium</a>
        </p>
      </div>
      <div class="column">
        <contact-form />
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from '@/components/contact_form'

  export default {
    components: { ContactForm }
  }
</script>

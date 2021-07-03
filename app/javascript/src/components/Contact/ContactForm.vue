<template>
  <div class="row">
    <div class="col-12">
      <div class="contact-message-wrapper">
        <h4 class="contact-title">Liên hệ</h4>
        <div class="contact-message">
          <form
            id="contact-form"
            action="https://d29u17ylf1ylz9.cloudfront.net/fudink/assets/mail.php"
            method="post"
          >
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-form-style mb-20">
                  <input name="name" placeholder="Họ và tên" type="text" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-form-style mb-20">
                  <input
                    name="email"
                    placeholder="Địa chỉ email"
                    type="email"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="contact-form-style mb-20">
                  <input name="subject" placeholder="Tiêu đề" type="text" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="contact-form-style">
                  <textarea name="message" placeholder="Nội dung"></textarea>
                  <button class="submit btn-style" type="submit" @click.prevent="sendMessage">
                    Gửi liên hệ
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p class="form-messege"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$toasted.success("Chúng tôi đã tiếp nhận yêu cầu. Cảm ơn vì sự góp ý của bạn")
    }
  },
};
</script>

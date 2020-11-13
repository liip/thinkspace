<template>
  <footer class="py-8 bg-gray-800 text-gray-500 text-center md:text-left">
    <div class="container">
      <div class="md:flex md:justify-between">
        <div class="space-y-2">
          <p>
            <a
              href="https://goo.gl/maps/zn9CVCNHtDdZDdyb7"
              target="_blank"
              rel="noopener"
              class="hover:text-white focus:text-white transition-colors ease-out duration-200"
              >Rue Etraz 4 &middot; 1003 Lausanne</a
            >
          </p>
          <p>
            <a
              href="mailto:hello@thinkspace.ch"
              class="hover:text-white focus:text-white transition-colors ease-out duration-200"
            >
              hello@thinkspace.ch</a
            >
          </p>
          <p>
            <a
              href="tel:+41215331300"
              class="hover:text-white focus:text-white transition-colors ease-out duration-200"
            >
              +41 21 533 13 00</a
            >
          </p>
        </div>
        <div class="mt-8 md:mt-0 space-y-2 md:text-right">
          <p>ThinkSpace &copy; {{ new Date().getFullYear() }}</p>
          <i18n path="footer.liip" tag="p">
            <a
              href="https://www.liip.ch"
              class="hover:text-white focus:text-white transition-colors ease-out duration-200"
              >Liip</a
            >
          </i18n>
        </div>
      </div>
    </div>
  </footer>
</template>

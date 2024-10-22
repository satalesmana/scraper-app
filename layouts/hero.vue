<script lang="ts" setup>
const route = useRoute();
const stylevars = reactive({
  "--position": "right",
});

watch(route, () => {
  stylevars["--position"] = "left";
  setTimeout(() => {
    stylevars["--position"] = "right";
  }, 300);
});
</script>

<template>
  <div class="wrapper" :style="stylevars">
    <div class="card">
      <div class="inner-wrapper">
        <div class="banner-train" />
        <div class="login-area">
          <div class="login-main">
            <div class="login-header">
              <img src="~/assets/img/banner.svg" />
              <div>
                <h1 style="line-height: 1; margin: 0">EasyGan</h1>
                <h4 style="line-height: 1; margin: 0">
                  Web Scraping for improve your business
                </h4>
              </div>
            </div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color-saphire-700: #00529e;
$color-saphire-500: #0073de;

.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: #f9f9f9;
  .card {
    box-shadow: 0 0.925rem 2.5rem 0 rgba(0, 0, 0, 0.4) !important;
    padding: 0 !important;
    overflow: hidden;
    box-sizing: border-box;
    background: #fff;
    color: #495057;
    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    .inner-wrapper {
      width: 63rem;
      height: 33rem;
      display: grid;
      grid-template-columns: 4fr 3fr;

      .banner-train {
        background-image: url("~/assets/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .login-area {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 3rem 2rem;

        background-repeat: no-repeat;
        background-size: cover;
        background: linear-gradient(
          10deg,
          var(--color-saphire-700) 0%,
          var(--color-saphire-500) 50%
        );
        background-position: var(--position);
        background-image: url("data:image/svg+xml,%3Csvg width='1138' height='900' viewBox='0 0 1138 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1_1677' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1138' height='1138'%3E%3Crect width='1138' height='1138' fill='url(%23paint0_linear_1_1677)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1_1677)'%3E%3Crect width='1138' height='1138' fill='url(%23paint1_linear_1_1677)'/%3E%3Cg style='mix-blend-mode:overlay'%3E%3Cpath d='M1005.39 611.675C1005.39 851.291 811.139 1045.54 571.524 1045.54C331.908 1045.54 137.661 851.291 137.661 611.675C137.661 372.059 829.783 -419.638 1069.4 -419.638C1309.01 -419.638 1005.39 372.059 1005.39 611.675Z' fill='url(%23paint2_linear_1_1677)'/%3E%3C/g%3E%3Cg style='mix-blend-mode:lighten'%3E%3Cpath d='M1060.84 867.725C1060.84 1197.69 -195.282 1600.31 -525.245 1600.31C-855.207 1600.31 -134.057 1197.69 -134.057 867.725C-134.057 537.762 -364.445 -56.9 -34.4821 -56.9C295.48 -56.9 1060.84 537.762 1060.84 867.725Z' fill='url(%23paint3_linear_1_1677)'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1677' x1='186.557' y1='139.918' x2='858.164' y2='1091.36' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%232BA7DF'/%3E%3Cstop offset='1' stop-color='%231F779E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_1677' x1='-1.14761e-05' y1='1138' x2='1159.34' y2='1.17207e-05' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_1677' x1='1090.74' y1='1130.89' x2='649.762' y2='576.113' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_1_1677' x1='61.8298' y1='417.189' x2='767.017' y2='1416.2' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");

        .login-main {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          perspective: 1000px;

          .login-header {
            color: #fff;
            display: grid;
            grid-template-columns: 40px 1fr;
            column-gap: 0.5rem;

            > div {
              align-self: flex-end;
            }
            h1 {
              font-size: 2.5rem;
              font-weight: 600;
            }
            h4 {
              text-align: center;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .wrapper {
    .card {
      border-radius: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='1138' height='900' viewBox='0 0 1138 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1_1677' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1138' height='1138'%3E%3Crect width='1138' height='1138' fill='url(%23paint0_linear_1_1677)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1_1677)'%3E%3Crect width='1138' height='1138' fill='url(%23paint1_linear_1_1677)'/%3E%3Cg style='mix-blend-mode:overlay'%3E%3Cpath d='M1005.39 611.675C1005.39 851.291 811.139 1045.54 571.524 1045.54C331.908 1045.54 137.661 851.291 137.661 611.675C137.661 372.059 829.783 -419.638 1069.4 -419.638C1309.01 -419.638 1005.39 372.059 1005.39 611.675Z' fill='url(%23paint2_linear_1_1677)'/%3E%3C/g%3E%3Cg style='mix-blend-mode:lighten'%3E%3Cpath d='M1060.84 867.725C1060.84 1197.69 -195.282 1600.31 -525.245 1600.31C-855.207 1600.31 -134.057 1197.69 -134.057 867.725C-134.057 537.762 -364.445 -56.9 -34.4821 -56.9C295.48 -56.9 1060.84 537.762 1060.84 867.725Z' fill='url(%23paint3_linear_1_1677)'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1677' x1='186.557' y1='139.918' x2='858.164' y2='1091.36' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%232BA7DF'/%3E%3Cstop offset='1' stop-color='%231F779E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_1677' x1='-1.14761e-05' y1='1138' x2='1159.34' y2='1.17207e-05' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_1677' x1='1090.74' y1='1130.89' x2='649.762' y2='576.113' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_1_1677' x1='61.8298' y1='417.189' x2='767.017' y2='1416.2' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
      display: block;
      .inner-wrapper {
        display: block;
        width: 100vw;
        height: 100vh;
        .banner-train {
          display: none;
        }
        .login-area {
          background-image: none;
        }
      }
    }
  }
}
</style>

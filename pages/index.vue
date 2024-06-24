<template>
<div>
  <client-only>
    <MobileHomeComp v-if="$device.isMobileOrTablet" />
    <DesktopHomeComp v-else />
  </client-only>
</div>
</template>

<script>
export default {
  layout: (ctx) => ctx.$device.isMobileOrTablet ? 'mobile-layout' : 'dekstop-layout',
}
</script>

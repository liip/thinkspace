<template>
  <div class="relative">
    <img
      src="/plan.svg"
      loading="lazy"
      width="530"
      height="583"
      alt=""
      class="w-full h-auto"
    />
    <button
      v-for="tip in tips"
      :key="tip.id"
      v-tooltip="{
        content: tip.label,
        trigger: 'hover click',
        show: tip.id === highlight,
      }"
      type="button"
      class="tip absolute w-5 h-5 rounded-full border-2 border-white shadow-md"
      :class="
        tip.id === highlight
          ? 'bg-purple-600 hover:bg-purple-500 focus:bg-purple-500'
          : 'bg-green-600 hover:bg-green-500 focus:bg-green-500'
      "
      :style="{ top: `${tip.position.y}%`, left: `${tip.position.x}%` }"
    ></button>
  </div>
</template>

<script>
import { VTooltip } from 'v-tooltip';

export default {
  directives: {
    tooltip: VTooltip,
  },

  props: {
    spaces: {
      type: Array,
      default: () => [],
    },
    highlight: {
      type: String,
      default: null,
    },
  },

  computed: {
    tips() {
      return [
        ...this.spaces.map((space) => ({
          id: space.slug,
          label: space.title,
          position: space.position,
        })),
        {
          id: 'south',
          label: this.$t('plan.rooms.south'),
          position: {
            x: 13,
            y: 69,
          },
        },
        {
          id: 'east',
          label: this.$t('plan.rooms.east'),
          position: {
            x: 35,
            y: 78,
          },
        },
        {
          id: 'west',
          label: this.$t('plan.rooms.west'),
          position: {
            x: 38,
            y: 16,
          },
        },
        {
          id: 'north',
          label: this.$t('plan.rooms.north'),
          position: {
            x: 81,
            y: 14,
          },
        },
        {
          id: 'kitchen',
          label: this.$t('plan.rooms.kitchen'),
          position: {
            x: 45,
            y: 50,
          },
        },
        {
          id: 'liip',
          label: this.$t('plan.rooms.liip'),
          position: {
            x: 85,
            y: 49,
          },
        },
      ];
    },
  },
};
</script>

<style>
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  @apply px-3 py-1;
  @apply text-white;
  @apply bg-gray-800 rounded;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  @apply m-2;

  position: absolute;
  z-index: 1;

  border-style: solid;
  @apply border-gray-800;
}

.tooltip[x-placement^='top'] {
  @apply mb-2;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  @apply mt-2;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  @apply ml-2;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  @apply mr-2;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>

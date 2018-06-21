<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand"
           href="/">ASP.NET Core with Vue.js 2</a>
        <button class="navbar-toggler"
                type="button"
                @click="toggleCollapsed">
            <span class="navbar-toggler-icon"></span>
        </button>
        <transition name="slide">
            <div class="collapse navbar-collapse show"
                 v-show="!collapsed">
                <ul class="navbar-nav mr-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item"
                            v-for="(route, index) in routes"
                            :key="index"
                            @click="toggleCollapsed">
                            <!-- TODO: highlight active link -->
                            <router-link :to="route.path"
                                         class="nav-link"
                                         :class="route.style">
                                {{ route.display }}
                            </router-link>
                        </li>
                    </ul>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script>
import { routes } from '../routes'

export default {
    data() {
        return {
            routes,
            collapsed: true
        }
    },
    methods: {
        toggleCollapsed: function (event) {
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.35s;
}
.slide-enter,
.slide-leave-to {
  max-height: 0px;
}

.slide-enter-to,
.slide-leave {
  max-height: 20em;
}
</style>
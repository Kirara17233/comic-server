import { createApp } from 'vue'
import IndexApp from './IndexApp.vue'
import ListApp from './ListApp.vue'
import ComicApp from './ComicApp.vue'
import ChapterApp from './ChapterApp.vue'

createApp(IndexApp).mount('#index-app')
createApp(ListApp).mount('#list-app')
createApp(ComicApp).mount('#comic-app')
createApp(ChapterApp).mount('#chapter-app')

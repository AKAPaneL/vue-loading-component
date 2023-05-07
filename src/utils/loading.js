import Vue from 'vue/dist/vue.esm.js'
export function showLoading () {
  // if (stringArg === 'top') {
  //   const root = document.createElement('div')
  //   root.classList.add('.loading_root')
  //   document.body.appendChild(root)
  // }
  const loadingRoot = document.querySelector('.loading_root')
  if (loadingRoot) return
  const template = `<div class="loading_root">
                      <span class="loading-container has_border">
                        <svg viewBox="25 25 50 50" class="loading__circular">
                            <circle cx="50" cy="50" r="13" fill="none"></circle>
                        </svg>
                      </span>
                    </div>`
  const instance = new Vue({
    template
  })
  const vm = instance.$mount()
  document.body.appendChild(vm.$el)
  return vm
}
export function clearLoading () {
  // const root = document.querySelector('.loading_root')
}

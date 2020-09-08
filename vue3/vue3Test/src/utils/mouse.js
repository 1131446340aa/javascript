import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x2 = ref(0)
  const y2 = ref(0)

  function update(e) {
    x2.value = e.pageX
    y2.value = e.pageY
   
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x2, y2 }
}
export const removeFocus = (el: any) => {
  el.blur()
  el.closest('button')?.blur()
  el.closest('a')?.blur()
}

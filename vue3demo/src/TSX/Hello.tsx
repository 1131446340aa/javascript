export default {
  setup (
    props: object,
    { attrs, emit }: { attrs: { name: string }; emit: Function }
  ) {
    console.log(props)

    return { attrs, emit }
  },
  render (props: { attrs: { name: string }; emit: Function }) {
    console.log(props)

    return (
      <div
        onClick={() => {
          props.emit('updateName')
        }}
      >
        hello {props.attrs.name}
      </div>
    )
  }
}

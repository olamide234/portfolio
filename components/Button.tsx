import React from 'react'
interface Props {
  btnText: string,
}

const Button = ({btnText}: Props) => {
  return (
    <>
      <button className="bg-[#FF7A00] px-12 py-5 rounded-lg">{btnText}</button>
    </>
  )
}

export default Button;
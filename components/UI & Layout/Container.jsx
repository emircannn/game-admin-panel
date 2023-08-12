'use client';

const Container = ({
    children
}) => {
  return (
    <div className="container flex">
        {children}
    </div>
  )
}

export default Container
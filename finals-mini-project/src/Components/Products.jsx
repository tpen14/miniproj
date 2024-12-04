const keyboards = [
    {id: 1, kb: "Logitech Ergo K860 Wireless Ergonomic Keyboard with Wrist Rest", desc:"Introducing ERGO K860, a split ergonomic keyboard designed for better posture, less strain, and more support. You’ll type more naturally with a curved, split keyframe that improves typing posture. The sloping form reduces muscle strain on your wrists and forearms – keeping your hands and shoulders relaxed."},
    {id: 2, kb: "GMMK 3 HE Prebuilt Keyboard", desc:"The world’s most customizable gaming keyboard capable of over 1 billion possible configurations, offering gamers complete control over every aspect of their experience: Gaming performance, typing experience, and aesthetics."},
    {id: 3, kb: "GMMK Numpad", desc:"Meet the world's most customizable mechanical numpad. Packed with high-tech features, the GMMK Numpad is incredibly versatile with its hotswappable design and unmatched build quality."},
    {id: 4, kb: "", desc:""},
]
export default function Products(){
    

    return(
        <>
        <h1>Products</h1>
        <ul>
        {keyboards.map((keyboard)=>(
              <li key  = {keyboard.id}>
                <strong>{keyboard.kb}</strong> 
              </li>
        ))}
</ul>
        </>
    )

}
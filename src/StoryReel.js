import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   profileSrc="https://wallpapercave.com/wp/wc3134750.jpg"
                   title="Oğuzhan Tan" />
            
            <Story image="https://media-exp1.licdn.com/dms/image/C561BAQHlWe2P-2FEqQ/company-background_10000/0/1548731380634?e=2159024400&v=beta&t=JH5wA0U0nQcrtxPMc-rjMLtmPPDH0CLmwxGOjy5Dpdw"
                   profileSrc="https://fsa.zobj.net/crop.php?r=YtYes1Xi-Jc3EsWYqXgJ3PYRifCBb8uAOcmgA0i6dpqnYQ9rOpvlO5kyDjV5LSMTqeLdzHPl_H4v73BgbjMEMseHMO7t5FJwr9aACz8VyShHPMFqWpE1c9RxbnkQsFIOtxTS5r2CHa3DT7w1"
                   title="Safa Ispartalıoğlu" />
            
            <Story image="https://www.hdcarwallpapers.com/walls/mercedes_amg_gt_r_2018_4k-HD.jpg"
                   profileSrc="https://besthqwallpapers.com/Uploads/9-2-2019/79956/thumb2-4k-fernando-muslera-yellow-uniform-galatasaray-fc-goalkeeper.jpg"
                   title="Mustafa Erdoğan" />
            
            <Story image="https://www.favoribranda.com/wp-content/uploads/2016/03/tir-brandasi-05.jpg"
                   profileSrc="https://wallpapercave.com/wp/wp6743751.jpg"
                   title="Veysel Kazan" />
            
            <Story image="data:image/jpeg;base64,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"
                   profileSrc="https://wallpaperaccess.com/full/314481.jpg"
                   title="Umut Ertemiz" />
        </div>
    )
}

export default StoryReel
import React, { useState } from "react"

function Home(props) {

    const [isSearch, setIsSearch] = useState(false)



    const handleSearch = () => {
        setIsSearch(true)
        setTimeout(() => setIsSearch(false), 1000)
    }

    return (
        <>
        <section class="hero is-primary">
            <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    DRAKS
                </h1>
                <div class={`control is-medium ${ isSearch ? 'is-loading': ''}`}>
                    <input class="input is-medium" type="text" placeholder="Search your draks" onChange={handleSearch}/>
                </div>
            </div>
            </div>
        </section>
        <div class="container is-fullhd mt-5">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-link">
                    <p class="title is-size-4">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                    </article>
                    <article class="tile is-child notification is-warning">
                    <p class="title is-size-4">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                    <p class="title is-size-4">Middle tile</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title is-size-4">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                <div class="content">
                    <p class="title is-size-4">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    </div>
                </div>
                </article>
            </div>
            
            </div>
            <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-link">
                    <p class="title is-size-4">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                    </article>
                    <article class="tile is-child notification is-warning">
                    <p class="title is-size-4">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                    <p class="title is-size-4">Middle tile</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title is-size-4">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                <div class="content">
                    <p class="title is-size-4">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    </div>
                </div>
                </article>
            </div>
            
            </div>
            <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-link">
                    <p class="title is-size-4">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                    </article>
                    <article class="tile is-child notification is-warning">
                    <p class="title is-size-4">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                    <p class="title is-size-4">Middle tile</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title is-size-4">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                <div class="content">
                    <p class="title is-size-4">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    </div>
                </div>
                </article>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default Home
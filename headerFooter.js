function Header (header){
    return (
        <header id="webpageHeader">
            <h1 id="name" class="headerElement cursive">Zachariah 'Kong' Ly</h1>
            <nav id="headerButtons" class="headerElement">
                <button id = "aboutButton" class="headerElement button" onclick="window.location.href = 'about.html';"  > About </button>
                <button class="headerElement button unfinishedButton"> Gallery </button>
                <a href="https://linktr.ee/mountainkong"><button class="headerElement button"> Links </button></a>
            </nav>
        </header>
    );
    //// <!-- <h1 id="name" class="headerElement" onclick="window.location.href = 'index.html';">Zachariah 'Kong' Ly</h1> -->
}

function footer (footer){
    return (
        <footer>
            "Find me in the mountains, where the air is pure like freshly fallen snow."
        </footer>
    );
}
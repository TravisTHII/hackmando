import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

import { useGlobalContext } from '../../context/Global'

import { Card } from '../Card'

export function Search() {

  const { state: { panels: { search } } } = useGlobalContext()

  return (
    <div className={`search panel${search.state ? '' : ' hide_panel'}`}>
      <div className="container flex_ui">

        <Card inverted={true}>

          <div className="grid_one card_ui flex-column">
            <div className="content_header">
              <h1>Pokésearch</h1>
              <p>Pokémon search app</p>
            </div>
            <div className="card_content text_ui">
              <p className="center_text">
                Search & discover over 800 pokémon. powered by PokéAPI
              </p>
              <div className="content_list">
                <ul>
                  <li>Search by ID or Name</li>
                  <li>Randomize pokémon to simplify discovery</li>
                  <li>Beautiful responsive design</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex_ui">
                <FaReact className="skill_icon" title="React" />
                <SiTypescript className="skill_icon" title="Typescript" />
              </div>
            </div>
          </div>

          <div className="grid_two">
            <div className="project_image">
              <a
                href="https://pocketmonsters-search.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/pokesearch.png" alt="pokemon search app" />
              </a>
            </div>
          </div>

        </Card>

      </div>
    </div>
  )
}
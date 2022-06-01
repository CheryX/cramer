import { useState } from 'react'
import Pagination from '@/components/Pagination'
import ArticleCard from '@/components/ArticleCard'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="container px-4" id="custom-cards">
            <h1 className="pb-2 text-center fw-bold ">
              Wszystkie notatki
            </h1> 

            <form className="mt-5 mb-4" role="search">
              <input
                aria-label="Szukaj notatek"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-control form-control-dark text-white bg-dark"
                placeholder="Szukaj notatek"
              />
            </form>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">

              {!filteredBlogPosts.length && 'Nie znaleziono postów, proszę skontaktuj się z autorem strony'}
              {displayPosts.map((frontMatter) => ArticleCard({frontMatter}) )}

            </div>
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

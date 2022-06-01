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
            <input
              aria-label="Szukaj notatek"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Szukaj notatek"
            />

        <div className="container-fluid">
          <div className="container px-4 py-5" id="custom-cards">
            <h1 className="pb-2 text-center fw-bold ">Wszystkie notatki</h1>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

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

import {Component} from 'react'
import RepoItem from '../RepoItem'
import './index.css'

class Counter extends Component {
  state = {repoList: [], pageNo: ''}

  onChangePage = event =>
    this.setState({pageNo: event.target.value}, this.getReposList)

  componentDidMount = () => this.getReposList()

  getReposList = async () => {
    const {pageNo} = this.state
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNo}`
    const options = {method: 'GET'}
    const response = await fetch(url)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.items.map(each => ({
        id: each.id,
        ownerAvatar: each.owner.avatar_url,
        ownerName: each.full_name,
        repoName: each.name,
        issues: each.open_issues,
        stars: each.forks_count,
        description: each.description,
        createdAt: each.created_at,
      }))
      // console.log(updatedData)
      this.setState({repoList: updatedData})
    }
  }

  render() {
    const {repoList, pageNo} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Most Stared Repos</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Page No:"
            onChange={this.onChangePage}
            value={pageNo}
            className="input-ele"
          />
        </div>

        <ul className="repo-container">
          {repoList.map(eachRepo => (
            <RepoItem repoDetails={eachRepo} key={eachRepo.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Counter

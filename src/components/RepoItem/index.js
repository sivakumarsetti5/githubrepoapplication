import './index.css'

const RepoItem = props => {
  const {repoDetails} = props
  const {
    id,
    ownerAvatar,
    ownerName,
    repoName,
    issues,
    stars,
    description,
    createdAt,
  } = repoDetails

  return (
    <li className="repo-item">
      <img src={ownerAvatar} className="avatar-img" />
      <div className="repo-name-cont">
        <h1 className="heading">{repoName}</h1>
        <p className="description">{description}</p>
        <div className="star-container">
          <p className="stars">{stars} stars</p>
          <p className="stars">{issues} issues</p>
        </div>
      </div>
      <p className="duration">
        Last pushed {createdAt} by {ownerName}
      </p>
    </li>
  )
}

export default RepoItem

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogsList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://reqres.in/api/users')
    const data1 = await response.json()
    const {data} = data1
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      email: eachItem.email,
      firstName: eachItem.first_name,
      lastName: eachItem.last_name,
      avatar: eachItem.avatar,
    }))
    this.setState({isLoading: false, blogsData: formattedData})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {blogsData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      <img
                        className="xxx"
                        alt={item.firstName}
                        src={item.avatar}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}

export default BlogsList

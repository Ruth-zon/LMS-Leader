import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {FaCopy, FaPlus, FaTrash} from 'react-icons/fa';
import {
  handleDelete,
  handleIconById,
  handleImage,
  handleImageById,
} from '../handleImage';
import FontPicker from 'font-picker';
import swal from 'sweetalert';

// const YOUR_API_KEY = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCuFNlrwKUMRXcw0ZPXMPnch6Vk4g8KeSY';
// const fontPicker = new FontPicker(
//   YOUR_API_KEY, // Google API key
//   "Open Sans", // Default font
//   { limit: 30 }, // Additional options
// );
export function ConfigHeader(props) {
  let data = props.data;
  return (
    <>
      <h5>Header</h5>
      <br />
      <div>
        Background color
        <input
          data-toggle="tooltip"
          data-placement="top"
          title="Change background color"
          type="color"
          value={data.course.colors.header}
          onChange={(e) => data.setColorHeader(e.target.value)}
        />
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => data.setName(e.target.value)}
          value={data.course.name}
        />
        <input
          width={2}
          placeholder="Change font to"
          type="text"
          value={data.course.titleFont}
          onChange={(e) => data.setTitleFont(e.target.value)}
        />
        <div id="font-picker"></div>
      </div>
      <div>
        subtitle
        <input
          type="text"
          onChange={(e) => data.setSubtitle(e.target.value)}
          value={data.course.subtitle}
        />
      </div>
      <div>
        Stars
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show stars"
        >
          <input
            type="checkbox"
            onClick={data.showStars}
            checked={data.course.show.stars}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Students
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show students"
        >
          <input
            type="checkbox"
            onClick={data.showStudents}
            checked={data.course.show.students}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Weeks
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show weeks"
        >
          <input
            type="checkbox"
            onClick={data.showWeeks}
            checked={data.course.show.weeks}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Lessons
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show lessons"
        >
          <input
            type="checkbox"
            onClick={data.showLessons}
            checked={data.course.show.lessons}
          />
          <span class="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigOverview(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Overview
        <FaPlus
          data-toggle="tooltip"
          data-placement="top"
          title="Add overview"
          onClick={(e) =>
            data.addNewForOverview({header: 'title', text: 'text'})
          }
        />
      </h5>
      <br />
      {data.course.description.map((value, key) => {
        return (
          <>
            <div>
              {key + 1}{' '}
              <FaTrash
                data-toggle="tooltip"
                data-placement="top"
                title="Garbage"
                onClick={(e) => {
                  handleDelete(data.deleteFromOverview, key);
                }}
              />
              <FaCopy
                data-toggle="tooltip"
                data-placement="top"
                title="Copy"
                onClick={(e) => {
                  data.addNewForOverview({
                    header: value.header,
                    text: value.text,
                  });
                }}
              />
            </div>
            <div>
              Title
              <input
                type="text"
                onChange={(e) =>
                  data.setDescription({
                    id: key,
                    value: e.target.value,
                    key: 'header',
                  })
                }
                value={value.header}
              />
            </div>
            <div>
              Text
              <textarea
                type="text"
                onChange={(e) =>
                  data.setDescription({
                    id: key,
                    value: e.target.value,
                    key: 'text',
                  })
                }
                value={value.text}
              />
            </div>
          </>
        );
      })}
    </>
  );
}

export function ConfigCurriculum(props) {
  // let {data} = props;
  // return (
  //   <>
  //     <h5>
  //       Curriculum
  //       {/* <FaPlus
  //         onClick={(e) =>
  //           data.addLesson({header: 'title', text: 'text'})
  //         }
  //       /> */}
  //     </h5>
  //   </>
  // );
  return null;
}

export function ConfigCurriculumX(props) {
  // let {data} = props;
  // return (
  //   <>
  //     <h5>
  //       Curriculum
  //       {/* <FaPlus
  //         onClick={(e) =>
  //           data.addLesson({header: 'title', text: 'text'})
  //         }
  //       /> */}
  //     </h5>
  //   </>
  // );
  return null;
}

//here
export function ConfigInstructorReviews(props) {
  let data = props.data;
  return (
    <>
      <h5>Reviews</h5>
      <div>
        Show reviews section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show reviews"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showReviews()}
            checked={data.course.show.reviews}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <h5>Instructor</h5>
      <div>
        Show instructor section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show instructor"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showInstructor()}
            checked={data.course.show.instructor}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

function checkPro(user, data) {
  if (!user.isPro && !data.course.show.price)
    swal('Oops...', 'Only pro users can charge for their courses', 'info');
  else data.showPrice();
}
export function ConfigBuyCourse(props) {
  let {data} = props;
  return (
    <>
      <h5>Course card </h5>

      <div>
        Price
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show price"
        >
          <input
            type="checkbox"
            onClick={() => checkPro(data.user, data)}
            checked={data.course.show.price}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.price && (
          <input
            type="text"
            onChange={(e) => data.setPrice(e.target.value)}
            value={data.course.price}
          />
        )}
      </div>
      {data.course.show.price && (
        <div>
          Previos price
          <label
            class="switch"
            data-toggle="tooltip"
            data-placement="top"
            title="Hide/show previos price"
          >
            <input
              type="checkbox"
              onClick={data.showPrevPrice}
              checked={data.course.show.prev_price}
            />
            <span class="slider round"></span>
          </label>
          {data.course.show.prev_price && (
            <input
              type="text"
              onChange={(e) => data.setPrevPrice(e.target.value)}
              value={data.course.prev_price}
            />
          )}
        </div>
      )}
      {data.course.show.prev_price && data.course.show.price && (
        <div>
          Time to previos price
          <label
            class="switch"
            data-toggle="tooltip"
            data-placement="top"
            title="Hide/show time to previos price"
          >
            <input
              type="checkbox"
              onClick={data.showPrevPriceTime}
              checked={data.course.show.prev_price_time}
            />
            <span class="slider round"></span>
          </label>
          {data.course.show.prev_price_time && (
            <input
              type="text"
              onChange={(e) => data.setPrevPriceTime(e.target.value)}
              value={data.course.prev_price_time}
            />
          )}
        </div>
      )}
      <div>
        Image
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => handleImage(e, data.setImage)}
        />
      </div>
    </>
  );
}

export function ConfigBuyCourseShare(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Course card
        {/* <FaPlus
          onClick={(e) =>
            data.addLesson({header: 'title', text: 'text'})
          }
        /> */}
      </h5>
      <div>
        Instegram
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show instegram"
        >
          <input
            type="checkbox"
            onClick={data.showInstegram}
            checked={data.course.show.share.instegram}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.instegram && (
          <input
            type="text"
            placeholder="instegram"
            onChange={(e) => data.setInstegram(e.target.value)}
            value={data.course.share.instegram}
          />
        )}
      </div>
      <div>
        Facebook
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show time to previos fasebook"
        >
          <input
            type="checkbox"
            onClick={data.showFacebook}
            checked={data.course.show.share.facebook}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.facebook && (
          <input
            type="text"
            placeholder="facebook"
            onChange={(e) => data.setFacebook(e.target.value)}
            value={data.course.share.facebook}
          />
        )}
      </div>
      <div>
        Whatsapp
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show whatsapp"
        >
          <input
            type="checkbox"
            onClick={data.showWhatsapp}
            checked={data.course.show.share.whatsapp}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.whatsapp && (
          <input
            type="text"
            placeholder="whatsapp"
            onChange={(e) => data.setWhatsapp(e.target.value)}
            value={data.course.share.whatsapp}
          />
        )}
      </div>
      <div>
        Twitter
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show twitter"
        >
          <input
            type="checkbox"
            onClick={data.showTwitter}
            checked={data.course.show.share.twitter}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.twitter && (
          <input
            type="text"
            placeholder="twitter"
            onChange={(e) => data.setTwitter(e.target.value)}
            value={data.course.share.twitter}
          />
        )}
      </div>
      <div>
        Youtube
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show youtube"
        >
          <input
            type="checkbox"
            onClick={data.showYoutube}
            checked={data.course.show.share.youtube}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.youtube && (
          <input
            type="text"
            placeholder="youtube"
            onChange={(e) => data.setYoutube(e.target.value)}
            value={data.course.share.youtube}
          />
        )}
      </div>
      <div>
        Reddit
        <label
          class="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show reddit"
        >
          <input
            type="checkbox"
            onClick={data.showReddit}
            checked={data.course.show.share.reddit}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.reddit && (
          <input
            type="text"
            placeholder="reddit"
            onChange={(e) => data.setReddit(e.target.value)}
            value={data.course.share.reddit}
          />
        )}
      </div>
    </>
  );
}
export function ConfigBuyCourseInfo(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Course information
        <FaPlus
          data-toggle="tooltip"
          data-placement="top"
          title="Add course information"
          onClick={(e) =>
            data.addNewForInfo({
              name: 'Write info here',
              icon: './img_from_xd/book.svg',
            })
          }
        />
      </h5>
      {data.course.course_info.map((value, key) => {
        return (
          <>
            <span>
              {key + 1}
              <FaTrash
                data-toggle="tooltip"
                data-placement="top"
                title="Garbage"
                onClick={(e) => {
                  handleDelete(data.deleteFromInfo, key);
                }}
              />
              <FaCopy
                data-toggle="tooltip"
                data-placement="top"
                title="Copy"
                onClick={(e) => {
                  data.addNewForInfo({
                    name: value.name,
                    icon: value.icon,
                  });
                }}
              />
            </span>
            <div>
              Info
              <input
                type="text"
                value={value.name}
                onChange={(e) =>
                  data.setCourseInfo({
                    id: key,
                    key: 'name',
                    value: e.target.value,
                  })
                }
              />
            </div>
            <div>
              Icon
              <input
                type="file"
                accept=".svg"
                onChange={(e) => handleIconById(e, data.setCourseInfo, key)}
              />
            </div>
            <br></br>
          </>
        );
      })}
    </>
  );
}

export function ConfigMoreCourses(props) {
  let data = props.data;
  return (
    <>
      <h5>More courses</h5>
      <div>
        Background color
        <input
          data-toggle="tooltip"
          data-placement="top"
          title="Change background color"
          type="color"
          value={data.course.colors.more_courses}
          onChange={(e) => data.setColorMoreCourses(e.target.value)}
        />
      </div>
      <div>
        Show this section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showMoreCourses()}
            checked={data.course.show.more.more_courses}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <textarea
          value={data.course.more_courses.header}
          onChange={(e) =>
            data.setMoreCourses({key: 'header', value: e.target.value})
          }
        />
      </div>
      <div>
        Items to show
        <input
          type="number"
          value={data.course.more_courses.items}
          onChange={(e) =>
            data.setMoreCourses({key: 'items', value: e.target.value})
          }
        />
      </div>
      <radioGroup>
        <br />
        <u>Algorithm</u>
        <div id="algo" radioGroup="algo">
          <div>
            Same category
            <input
              type="radio"
              checked={data.course.more_courses.algorithm === 'category'}
              onChange={(e) =>
                data.setMoreCourses({key: 'algorithm', value: 'category'})
              }
            />
          </div>
          <div>
            Same auther
            <input
              type="radio"
              checked={data.course.more_courses.algorithm === 'auther'}
              onChange={(e) =>
                data.setMoreCourses({key: 'algorithm', value: 'auther'})
              }
            />
          </div>
        </div>
      </radioGroup>
      <CourseButtons></CourseButtons>
      {/* <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Algorithm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={(e) => data.showMoreCourses()}>
            Category
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => data.showMoreCourses()}>
            Auther
          </Dropdown.Item>
          // {/* <Dropdown.Item>Something else</Dropdown.Item> 
        </Dropdown.Menu>
      </Dropdown> */}
    </>
  );
}

export function ConfigBelive(props) {
  let data = props.data;
  return (
    <>
      <h5>A qoute</h5>
      <div>
        Background color
        <input
          data-toggle="tooltip"
          data-placement="top"
          title="Change background color"
          type="color"
          value={data.course.colors.belive}
          onChange={(e) => data.setColorBelive(e.target.value)}
        />
      </div>
      <div>
        Show this section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showBelive()}
            checked={data.course.show.more.belive}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Text
        <textarea
          type="text"
          value={data.course.belive.text}
          onChange={(e) => data.setBeliveText(e.target.value)}
        />
      </div>
      <div>
        Auther
        <input
          type="text"
          value={data.course.belive.auther}
          onChange={(e) => data.setBeliveAuther(e.target.value)}
        />
      </div>
      <div>
        Image
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={(e) => handleImage(e, data.setBeliveImage)}
        />
      </div>
    </>
  );
}

export function ConfigFooter(props) {
  let data = props.data;
  return (
    <>
      <h5>Footer</h5>

      <div>
        Show this section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showCourseFooter()}
            checked={data.course.show.more.footer}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigTopEducators(props) {
  let data = props.data;
  return (
    <>
      <h5>
        Top educations
        <FaPlus
          data-toggle="tooltip"
          data-placement="top"
          title="Add"
          onClick={(e) =>
            data.addNewForTop({
              bg: './img_from_xd/path 65-1.svg',
              image: './img_from_xd/image 63.png',
              header: 'Title',
              content: 'Content of discount',
              color: '#111111',
              discount: '000',
            })
          }
        />
      </h5>
      <div>
        Background color
        <input
          data-toggle="tooltip"
          data-placement="top"
          title="Change background color"
          type="color"
          value={data.course.colors.top_educators}
          onChange={(e) => data.setColorTopEducators(e.target.value)}
        />
      </div>
      <div>
        Show this section
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => data.showTopEducarors()}
            checked={data.course.show.more.top_educators}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigTopEducatorsX(props) {
  let {data, id} = props;

  return (
    <>
      <h5>
        Top educations
        <FaPlus
          data-toggle="tooltip"
          data-placement="top"
          title="Add"
          onClick={(e) =>
            data.addNewForTop({
              bg: './img_from_xd/path 65-1.svg',
              image: './img_from_xd/image 63.png',
              header: 'Title',
              content: 'Content of discount',
              color: '#111111',
              discount: '000',
            })
          }
        />
      </h5>
      <div>
        Header
        <textarea
          type="text"
          value={data.course.top_educators[id].header}
          onChange={(e) =>
            data.setTopEducatorsProp([e.target.value, 'header', id])
          }
        />
      </div>
      <div>
        Content
        <textarea
          type="text"
          value={data.course.top_educators[id].content}
          onChange={(e) =>
            data.setTopEducatorsProp([e.target.value, 'content', id])
          }
        />
      </div>
      <div>
        Discount
        <input
          type="text"
          value={data.course.top_educators[id].discount}
          onChange={(e) =>
            data.setTopEducatorsProp([e.target.value, 'discount', id])
          }
        />
      </div>
      <div>
        Background color discount
        <input
          data-toggle="tooltip"
          data-placement="top"
          title="Change background color"
          type="color"
          value={data.course.top_educators[id].color}
          onChange={(e) =>
            data.setTopEducatorsProp([e.target.value, 'color', id])
          }
        />
      </div>
      <div>
        Image
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handleImageById(e, data.setTopEducatorsImage, id)}
        />
      </div>
    </>
  );
}

export function CourseButtons(props) {
  return (
    <>
      <h5>Buttons</h5>
      <br />
      <div>
        Background color of all the buttons
        <input
          type="color"
          value={props.course.colors.button}
          onChange={(e) => props.color([e.target.value, 'button'])}
        />
      </div>
      <div>
        font color of all the buttons
        <input
          type="color"
          value={props.course.colors.button}
          onChange={(e) => props.color([e.target.value, 'fontButton'])}
        />
      </div>

      {/* <input type="text"
        width={2}
        InputProps={{ className: classes.multilineColor }}
        onChange={(e) => this.props.changeFont(e.target.value)}
        placeholder="To"
        value={this.props.homeStoreDesign.titleFont.titleCategory}
        className={classes.fieldTextStyle} /> */}
    </>
  );
}

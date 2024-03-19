import {HttpStatus} from "./http-status.constants";
import {CODES} from "./codes.contants";

export const ERROR_BY_CODE = new Map([
    //MONGO
    [CODES.MONGO.INVALID_BSON_ID, {
        code: CODES.MONGO.INVALID_BSON_ID,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: 'Invalid Object Id'
    }],

    //USER
    [CODES.USER.USERNAME_TAKEN, {
      code: CODES.USER.USERNAME_TAKEN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Username is taken',
      message: 'Username is taken. Use another username, please.'
    }],
    [CODES.USER.INACTIVE, {
      code: CODES.USER.INACTIVE,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'User is InActive',
      message: 'Your user was deactivated, please contact your administrator for details.'
    }],
    [CODES.USER.NOT_FOUND, {
      code: CODES.USER.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'User not found.',
      message: 'User not found.'
    }],
    [CODES.USER.EDIT_ONLY_YOURSELF, {
      code: CODES.USER.EDIT_ONLY_YOURSELF,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: 'You can edit your user only.'
    }],
    [CODES.USER.NOT_LOGGED_IN, {
      code: CODES.USER.NOT_LOGGED_IN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'User not Logged in.'
    }],
    [CODES.USER.ALREADY_VERIFIED, {
      code: CODES.USER.ALREADY_VERIFIED,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'User already verified.'
    }],

    //AUTH
    [CODES.AUTH.WRONG_CREDENTIALS, {
        code: CODES.AUTH.WRONG_CREDENTIALS,
        status: HttpStatus.BAD_REQUEST,
        title: 'Wrong credentials',
        message: 'There are no users with the credentials provided.'
    }],
    [CODES.AUTH.RESTRICTED_IP, {
        code: CODES.AUTH.RESTRICTED_IP,
        status: HttpStatus.BAD_REQUEST,
        title: 'Restricted Ip',
        message: 'You have logged in from restricted IP.'
    }],
    [CODES.AUTH.OFF_HOURS, {
        code: CODES.AUTH.OFF_HOURS,
        status: HttpStatus.BAD_REQUEST,
        title: 'Off hours',
        message: 'You have logged in off hours.'
    }],
    [CODES.AUTH.INVALID_SPECIAL_CODE, {
      code: CODES.AUTH.INVALID_SPECIAL_CODE,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No special code found.'
    }],
    [CODES.AUTH.NO_AUTH_HEADER, {
      code: CODES.AUTH.NO_AUTH_HEADER,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No Authorization Data provided (Header).'
    }],
    [CODES.AUTH.WRONG_AUTH_TYPE, {
      code: CODES.AUTH.WRONG_AUTH_TYPE,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Wrong authorization type. Bearer is required.'
    }],
    [CODES.AUTH.NO_TOKEN, {
      code: CODES.AUTH.NO_TOKEN,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No token found!'
    }],
    [CODES.AUTH.NO_TOKEN_PAYLOAD, {
      code: CODES.AUTH.NO_TOKEN_PAYLOAD,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No token payload found!'
    }],

    //SESSION
    [CODES.SESSION.EMPTY, {
      code: CODES.SESSION.EMPTY,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No session found.'
    }],
    [CODES.SESSION.EXPIRED, {
      code: CODES.SESSION.EXPIRED,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Session has expired.'
    }],
    [CODES.SESSION.WRONG_DEVICE, {
      code: CODES.SESSION.EMPTY,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'False dragon.'
    }],

    //COMMON
    [CODES.COMMON.UNKNOWN, {
      code: CODES.COMMON.UNKNOWN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'Wooopsy, Unknown error! Please contact administrator!'
    }],
    [CODES.COMMON.HTTP, {
      code: CODES.COMMON.HTTP,
    }],
    [CODES.COMMON.EMPTY_EMAIL, {
      code: CODES.COMMON.EMPTY_EMAIL,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'Error',
      message: 'Empty email.'
    }],
    [CODES.COMMON.EMPTY_PARAM, {
      code: CODES.COMMON.EMPTY_PARAM,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'Error',
      message: `Empty param.`
    }],

    //CODE
    [CODES.CODE.INVALID, {
      code: CODES.CODE.INVALID,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Wrong code',
      message: `Grogu knows this cookie, but it is bad cookie! Grogu don't eat it!`
    }],
    [CODES.CODE.UNKNOWN, {
      code: CODES.CODE.UNKNOWN,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Unknown code',
      message: `Grogu doesn't know this cookie! Grogu won't eat it! Try again.`
    }],
    [CODES.CODE.EXPIRED, {
      code: CODES.CODE.EXPIRED,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Expired code',
      message: `Grogu knows this cookie is stale! Grogu won't eat it! Try again.`
    }],
    [CODES.CODE.WRONG_RELATED_TO, {
      code: CODES.CODE.WRONG_RELATED_TO,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Wrong code',
      message: `Grogu won't eat stolen cookie!`
    }],

    //DATABASE
    [CODES.DATABASE.DUPLICATE, {
      code: CODES.DATABASE.DUPLICATE,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `Duplicate record!`
    }],

    //VALIDATE
    [CODES.VALIDATION, {
      code: CODES.VALIDATION,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `Validation error! Please refer body for details!`
    }],

    //HTTP
    [CODES.HTTP["400"], {
      code: CODES.HTTP["400"],
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'Bad Request!'
    }],
    [CODES.HTTP["401"], {
      code: CODES.HTTP["401"],
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Unauthorized!'
    }],
    [CODES.HTTP["403"], {
      code: CODES.HTTP["403"],
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: 'Forbidden Resource!'
    }],
    [CODES.HTTP["404"], {
      code: CODES.HTTP["404"],
      status: HttpStatus.NOT_FOUND,
      title: 'Error',
      message: 'Not found!'
    }],
    [CODES.HTTP.BAD_INPUT, {
      code: CODES.HTTP.BAD_INPUT,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'Bad input provided. Check the input for issues.'
    }],

    //LICENSE
    [CODES.LICENSE.NOT_FOUND, {
      code: CODES.LICENSE.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `No such license found!`
    }],

    //WORKSPACE
    [CODES.WORKSPACE.NO_ACCESS, {
      code: CODES.WORKSPACE.NO_ACCESS,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: `User does not have access to this workspace!`
    }],
    [CODES.WORKSPACE.NOT_FOUND, {
      code: CODES.WORKSPACE.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `No such Workspace found!`
    }],

    //WORKSPACE INFO
    [CODES.WORKSPACE_INFO.DOMAIN_TAKEN, {
      code: CODES.WORKSPACE_INFO.DOMAIN_TAKEN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `Domain is already occupied. Please choose another one.`
    }],
    [CODES.WORKSPACE_INFO.NOT_FOUND, {
      code: CODES.WORKSPACE_INFO.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `No such Workspace found!`
    }],

    //FEATURE
    [CODES.FEATURE.NOT_AVAILABLE, {
      code: CODES.FEATURE.NOT_AVAILABLE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `This Feature is not available for you license!`
    }],

    //PERMISSION
    [CODES.PERMISSION.NOT_FOUND, {
      code: CODES.PERMISSION.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have necessary permissions to enter!`
    }],
    [CODES.PERMISSION.NONE_AVAILABLE, {
      code: CODES.PERMISSION.NONE_AVAILABLE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have any permissions!`
    }],
    [CODES.PERMISSION.RELATED_DEFINITION_NOT_FOUND, {
      code: CODES.PERMISSION.RELATED_DEFINITION_NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Validation',
      message: `Related Definition not found.`
    }],
    [CODES.PERMISSION.RELATED_GROUP_NOT_FOUND, {
      code: CODES.PERMISSION.RELATED_GROUP_NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Validation',
      message: 'Related Category not found.'
    }],

    [CODES.PERMISSION_SET.NOT_FOUND, {
      code: CODES.PERMISSION_SET.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Validation',
      message: `Permission Set not found.`
    }],
    [CODES.PERMISSION_SET.ASSIGNEE_NOT_FOUND, {
      code: CODES.PERMISSION_SET.ASSIGNEE_NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Validation',
      message: `Assignee not found.`
    }],

    [CODES.PERMISSION_OPTIONS.NOT_FOUND, {
      code: CODES.PERMISSION.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `Permission Options `
    }],

    //PERMISSION ASSIGNMENT
    [CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_NOT_FOUND, {
        code: CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Permission not found.`
    }],
    [CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_SET_NOT_FOUND, {
        code: CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_SET_NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Permission Set not found.`
    }],
    [CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_DOES_NOT_HAVE_OPTIONS, {
        code: CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_DOES_NOT_HAVE_OPTIONS,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Permission does not have options, so you must NOT specify Access.`
    }],
    [CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_DOES_NOT_HAVE_SPECIFIED_OPTION, {
        code: CODES.PERMISSION_ASSIGNMENT.RELATED_PERMISSION_DOES_NOT_HAVE_SPECIFIED_OPTION,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Permission does not have option, that you specified in Access.`
    }],

    //OBJECT METADATA
    [CODES.OBJECT_METADATA.NOT_FOUND, {
        code: CODES.OBJECT_METADATA.NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
        title: 'Error',
        message: `Object Metadata not Found.`
    }],
    [CODES.OBJECT_METADATA.DUPLICATE_API_NAME, {
        code: CODES.OBJECT_METADATA.DUPLICATE_API_NAME,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Object Metadata with same ApiName already exist. Choose different name for the Object.`
    }],
    [CODES.OBJECT_METADATA.CANNOT_DELETE_STANDARD, {
        code: CODES.OBJECT_METADATA.CANNOT_DELETE_STANDARD,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `You cannot Delete standard Object.`
    }],
    [CODES.OBJECT_METADATA.CANNOT_EDIT_STANDARD, {
        code: CODES.OBJECT_METADATA.CANNOT_EDIT_STANDARD,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `You cannot Edit standard Object.`
    }],

    //FIELD METADATA
    [CODES.FIELD_METADATA.NOT_FOUND, {
        code: CODES.FIELD_METADATA.NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
        title: 'Error',
        message: `Field Metadata not found.`
    }],
    [CODES.FIELD_METADATA.DUPLICATE_API_NAME, {
        code: CODES.FIELD_METADATA.DUPLICATE_API_NAME,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Field Metadata with same ApiName already exist. Choose different name for the field..`
    }],
    [CODES.FIELD_METADATA.CANNOT_DELETE_STANDARD, {
        code: CODES.FIELD_METADATA.CANNOT_DELETE_STANDARD,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `You cannot Delete standard field.`
    }],
    [CODES.FIELD_METADATA.CANNOT_EDIT_STANDARD, {
        code: CODES.FIELD_METADATA.CANNOT_EDIT_STANDARD,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `You cannot Edit standard field.`
    }],
    [CODES.FIELD_METADATA.RELATED_OBJECT_DOES_NOT_EXIST, {
        code: CODES.FIELD_METADATA.RELATED_OBJECT_DOES_NOT_EXIST,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Object does not exist.`
    }],
    [CODES.FIELD_METADATA.RELATED_KEY_FIELD_DOES_NOT_EXIST, {
        code: CODES.FIELD_METADATA.RELATED_KEY_FIELD_DOES_NOT_EXIST,
        status: HttpStatus.BAD_REQUEST,
        title: 'Validation',
        message: `Related Key Field does not exist.`
    }],
  ]
);
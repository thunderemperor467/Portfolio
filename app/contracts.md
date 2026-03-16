"# Backend Integration Contracts

## API Endpoints

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Request Body:**
```json
{
  \"name\": \"string\",
  \"email\": \"string\",
  \"subject\": \"string\",
  \"message\": \"string\"
}
```
**Response:**
```json
{
  \"id\": \"string\",
  \"name\": \"string\",
  \"email\": \"string\",
  \"subject\": \"string\",
  \"message\": \"string\",
  \"created_at\": \"datetime\"
}
```

### 2. Resume Download
**Endpoint:** `GET /api/resume/download`
**Response:** PDF file stream

### 3. Get All Contact Messages (Optional - Admin)
**Endpoint:** `GET /api/contact`
**Response:**
```json
[
  {
    \"id\": \"string\",
    \"name\": \"string\",
    \"email\": \"string\",
    \"subject\": \"string\",
    \"message\": \"string\",
    \"created_at\": \"datetime\"
  }
]
```

## Database Schema

### Contact Model
- id: UUID (auto-generated)
- name: String (required)
- email: String (required, validated)
- subject: String (required)
- message: String (required)
- created_at: DateTime (auto-generated)

## Mock Data to Remove

### File: `/app/frontend/src/data/mock.js`
- All mock data is currently used for display
- Keep personal info (name, skills, projects) as static data
- Contact form submission will use backend API
- Resume download will use backend API

## Frontend Integration Points

### Contact Page (`/app/frontend/src/pages/Contact.js`)
- Line ~34: Replace mock setTimeout with actual API call to `/api/contact`
- Add error handling for failed submissions
- Keep toast notification on success

### Resume Page (`/app/frontend/src/pages/Resume.js`)
- Line ~19: Replace alert with actual download from `/api/resume/download`
- Handle download errors gracefully

## Implementation Steps
1. Create MongoDB model for contact messages
2. Implement POST /api/contact endpoint
3. Store resume PDF in backend
4. Implement GET /api/resume/download endpoint
5. Update frontend Contact.js to use real API
6. Update frontend Resume.js to use real API
7. Test all endpoints
"
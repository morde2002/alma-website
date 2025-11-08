// Cloudinary upload utility
const CLOUD_NAME = 'dqmnuxht6'
const UPLOAD_PRESET = 'alma_events'

interface CloudinaryUploadResponse {
  secure_url: string
  public_id: string
  width: number
  height: number
}

export const uploadImageToCloudinary = async (
  file: File
): Promise<CloudinaryUploadResponse> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) {
      throw new Error('Failed to upload image')
    }

    const data: CloudinaryUploadResponse = await response.json()
    return data
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw error
  }
}

# Cloud Run Angular Client

1. Change nginx.conf to listen to port 8080 - `listen 8080;`
2. Dockerfile `EXPOSE 8080`
3. Cloud Run default container port set to 8080 (change it at -> 'Edit & Deploy New Revision')
4. Docker Build. `⌘⇧P: Docker: Build Image`
5. Google Container Registry GCR. `gcloud builds submit --tag gcr.io/cloudrunmyproject/helloworldngclient`
6. Deploy Cloud Run. `gcloud run deploy --image gcr.io/cloudrunmyproject/helloworldngclient --platform managed`


## Authentication using Google Sign-In

* [End User](https://cloud.google.com/run/docs/authenticating/end-users)
* [Create Credential - OAuth Client ID](https://console.cloud.google.com/apis/credentials)
* [Google Sign-In Javascript](https://developers.google.com/identity/sign-in/web)
  * [Backend Verify ID token](https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token)
* [Walkthrough Video](https://youtu.be/1qG4BabzoXo)

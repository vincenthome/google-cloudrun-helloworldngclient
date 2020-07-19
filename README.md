# Cloud Run Angular Client

1. Change nginx.conf to listen to port 8080 - `listen 8080;`
2. Dockerfile `EXPOSE 8080`
3. Cloud Run default container port set to 8080 (change it at -> 'Edit & Deploy New Revision')
4. Docker Build. `⌘⇧P: Docker: Build Image`
5. Google Container Registry GCR. `gcloud builds submit --tag gcr.io/cloudrunmyproject/myservice`
6. Deploy Cloud Run. `gcloud run deploy --image gcr.io/cloudrunmyproject/myservice --platform managed --allow-unauthenticated`


## Authentication using Google Sign-In

* [End User](https://cloud.google.com/run/docs/authenticating/end-users)
* [Create Credential - OAuth Client ID](https://console.cloud.google.com/apis/credentials)
* [Google Sign-In Javascript](https://developers.google.com/identity/sign-in/web)
  * [Backend Verify ID token](https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token)
    * [dotnet](https://stackoverflow.com/questions/44141439/validate-google-id-token-with-c-sharp)
    * https://stackoverflow.com/questions/48727900/google-jwt-authentication-with-aspnet-core-2-0
    * 
* [Walkthrough Video](https://youtu.be/1qG4BabzoXo)

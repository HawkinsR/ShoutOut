FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ./ ./
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS run
WORKDIR /App
EXPOSE 80
EXPOSE 443
COPY --from=build /app/publish ./
ENTRYPOINT ["dotnet", "./ShoutOut.API.dll"]